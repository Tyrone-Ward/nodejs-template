import 'dotenv/config'
import { networkInterfaces } from 'node:os'

const localIpAddress = () => {
    const interfaces = networkInterfaces()

    for (const interfaceName in interfaces) {
        const networkInterface = interfaces[interfaceName]

        for (const ipInfo of networkInterface ?? []) {
            // Filter for IPv4 and skip loopback/internal addresses
            if (ipInfo.family === 'IPv4' && !ipInfo.internal) {
                return ipInfo.address
            }
        }
    }

    return '127.0.0.1' // Fallback if no network interface is found
}

function calculateTax() {
    return 0.15 * 100
}

const PORT = process.env.PORT || 3000
const getLocalIpAddress = localIpAddress()

export { PORT, getLocalIpAddress }
