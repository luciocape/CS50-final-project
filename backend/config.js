process.loadEnvFile()

export const {
    PORT = 3000,
    SECRET,
    SALT_ROUNDS = 10
} = process.env