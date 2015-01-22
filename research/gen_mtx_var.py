def mtx_to_js_var(mtx):
    return "var matrix = [\n%s\n];"%(",\n".join(
        "[%s]"%(",".join(
            c for c in r[1:])) for r in mtx[1:]))

def mtx_to_js_labels(labels):
    return "var labels = [\"%s\"];"%("\",\"".join(labels))

if __name__ == "__main__":
    import csv
    with open("data.tsv", "rb") as f:
        reader = csv.reader(f, delimiter="\t")
        table = [row for row in reader]

    labels = table[0][1:]
    mapping = {l:i+1 for i,l in enumerate(labels)}

    xings = {kt:sum(int(pf[0]) for pf in kt.split("c")) for kt in labels}
    slabels = sorted(labels, key=lambda x: xings[x])

    stable = [['data'] + slabels]
    for label in slabels:
        i = mapping[label]
        stable.append([label] + [table[i][mapping[lab2]] for lab2 in slabels])

    print table[mapping["0_1"]][mapping["0_1"]]

    import pprint
    pprint.pprint([row[0:8] for row in stable[0:8]])

    with open("matrix_9x.js", "w") as f:
        f.write(mtx_to_js_labels(slabels))
        f.write("\n")
        f.write(mtx_to_js_var(stable))
