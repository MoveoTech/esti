import Fuse from "fuse.js";

export const searchByName = async (name, items, limit) => {
    // options for the fuse collection
    const options = { includeMatches: true, includeScore: true ,keys: [{
      name: 'name',
      weight: 1
    }] }

    // create an index for our search
    const idx = Fuse.createIndex(options.keys, items)

    // create fuse collection
    const fuse = new Fuse(items, options, idx);

    // return found collection after it has been filtered to remove irrelevant matches
    return fuse.search(name).slice(0, limit).filter(item => item.score < 0.3);
}