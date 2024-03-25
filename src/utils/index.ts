export const replaceSpecialChars = (str: string = '') => {
    str = str.replace(/[ÀÁÃÄÂ]/g, 'A');
    str = str.replace(/[àáãâä]/g, 'a');
    str = str.replace(/[ÈÉÊË]/g, 'E');
    str = str.replace(/[èéêë]/g, 'e');
    str = str.replace(/[ÌÍÎÏ]/g, 'I');
    str = str.replace(/[ìíîï]/g, 'i');
    str = str.replace(/[ÒÓÔÕÖ]/g, 'O');
    str = str.replace(/[òóôõö]/g, 'o');
    str = str.replace(/[ÙÚÛŨÜ]/g, 'U');
    str = str.replace(/[ùúûũü]/g, 'u');
    str = str.replace(/[Ç]/g, 'C');
    str = str.replace(/[ç]/g, 'c');

    return str;
};

export const multiCssClass = (...args: unknown[]) => {
    return args.filter((c) => !!c).join(' ');
};

export const slugLinkTitle = (title: string) => {
    return replaceSpecialChars(title)
        .toLowerCase()
        .split(' ')
        .join('-')
        .replace(/\W/g, '');
};

export const getPartText = (data: { children: { text: string }[] }[]) => {
    let txt = '';

    for (let item of data) {
        for (let child of item.children) {
            txt += child.text;
        }

        if (txt.length > 100) txt.slice(0, 100);
    }

    return txt.slice(0, 100);
};
