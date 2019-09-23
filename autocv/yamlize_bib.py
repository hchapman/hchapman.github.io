from pybtex import database
from collections import OrderedDict
from pybtex.database.output.bibyaml import Writer as YamlWriter

class Writer(YamlWriter):
    """Outputs YAML markup with rich data"""

    def _to_dict(self, bib_data):
        def process_person_roles(entry):
            for role, persons in entry.persons.items():
                yield role, list(process_persons(persons))

        def process_person(person):
            for type in ('first', 'middle', 'prelast', 'last', 'lineage'):
                name = person.get_part_as_text(type)
                if name:
                    yield type, name

        def process_persons(persons):
            for person in persons:
                yield OrderedDict(process_person(person))

        def process_entries(bib_data):
            for key, entry in bib_data.items():
                fields = OrderedDict([('type', entry.original_type)])
                fields.update({k: v.render_as("html").replace("\\textsuperscript ", "") for
                               k,v in database.RichFieldProxyDict(entry.fields).items()})
                fields.update(process_person_roles(entry))
                yield key, fields

        data = {'entries': OrderedDict(process_entries(bib_data.entries))}
        if bib_data.preamble:
            data['preamble'] = bib_data.preamble
        return data

def extra_bibparse(db):
    """
    Parse some extra information out of the bibtex database so that we
    can include it in the webpage.
    """
    for key,entry in db.entries.items():
        for auth in entry.persons["author"]:
            if ("Harrison" not in auth.first_names or
                "Chapman" not in auth.last_names):
                entry.add_person(auth, "otherauthor")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Convert a bibtex file into a yaml file, for "
        "intelligent inclusion into Jekyll pages")
    parser.add_argument(
        "bibfile", type=argparse.FileType("r"),
        help="BibTeX file to convert into YAML")
    parser.add_argument(
        "yamlfile", type=argparse.FileType("w"),
        help="YAML file to write, will be overwritten")

    args = parser.parse_args()

    bibdb = database.parse_file(args.bibfile)

    extra_bibparse(bibdb)

    writer = Writer()
    writer.write_file(bibdb, args.yamlfile)
