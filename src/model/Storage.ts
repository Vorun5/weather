export const storage = {
    setItem: (name: string, item: any) => {
        localStorage.setItem(name, JSON.stringify(item))
    },
    getItems: (name: string) => {
        const item = localStorage.getItem(name);
        if (item) {
            return JSON.parse(item)
        }
    }
}
