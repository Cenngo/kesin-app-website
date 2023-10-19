import rateLimit from '@/app/utils/rate-limit'

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 10, // Max 500 users per second
})

export async function POST(req: Request, res: Response): Promise<Response> {
    const body = await req.json();

    const response = await fetch("https://discord.com/api/webhooks/1088095927195148318/iTPf2D-Mwjw1jbJs_5IuEj58TsOQvK8ThaRxByC1vVnXWzO3xan7v4X0-IhkP8G2M15G",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "KESiN Website",
            avatar_url: "https://cdn.discordapp.com/icons/1053618349554278411/49adef186e8c1af77667b3841d0460ad.webp?size=96",
            embeds: [
                {
                    "type": "rich",
                    "title": `İletişim İsteği`,
                    "description": "",
                    "color": 0x4C8EE2,
                    "timestamp": new Date().toISOString(),
                    "fields": [
                        {
                            "name": `Ad`,
                            "value": body.name,
                            "inline": true
                        },
                        {
                            "name": `Soyad`,
                            "value": body.surname,
                            "inline": true
                        },
                        {
                            "name": `Email`,
                            "value": body.email
                        },
                        {
                            "name": `Detaylar`,
                            "value": body.details
                        }
                    ]
                }
            ]
        })
    });

    return response;
}