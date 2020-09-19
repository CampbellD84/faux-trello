interface Item {
    id: string
}

export const findItemIndexById = <T extends Item>(Items: T[], id: string) => {
    return Items.findIndex((item: T) => item.id === id)
}