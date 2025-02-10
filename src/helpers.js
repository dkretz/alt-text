
export function pg_url_for_book(id) {
    return `https://www.gutenberg.org/files/${id}/${id}-h/${id}-h.htm`;
};


export function basepath(path) {
    return path.split('/').reverse()[0];
};
