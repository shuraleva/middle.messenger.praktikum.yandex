export function logFormData(element: HTMLFormElement) {
    const res: { [key: string]: FormDataEntryValue } = {};
    new FormData(element).forEach((x, y) => res[y] = x);
    console.log(res);
}
