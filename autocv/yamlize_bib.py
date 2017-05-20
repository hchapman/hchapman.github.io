from pybtex import database

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

    bibdb.to_file(args.yamlfile, "yaml")
