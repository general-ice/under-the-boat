export const jsonRequest = <T = any>(url: string) =>
    fetch(url)
        .then(r => r.json())
        .then((j: T) => j)