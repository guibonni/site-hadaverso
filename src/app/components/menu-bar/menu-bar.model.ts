export interface MenuItem {
    id: MenuOption;
    url: string;
    name: string;
    activated: boolean;
}

export enum MenuOption {
    NOT_FOUND = 0,
    HOME = 1,
    CHARACTERS = 2
}