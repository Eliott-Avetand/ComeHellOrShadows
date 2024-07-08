export const ROLES = {
    User: 'user',
    Admin: 'admin',
}

export type ROLES = typeof ROLES[keyof typeof ROLES];