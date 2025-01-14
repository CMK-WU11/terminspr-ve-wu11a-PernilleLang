"use server"

import { cookies } from "next/headers"
import z from "zod"

//dette er kopieret fra "din mægler"//

export default async function Login ( state, formData ) {

    const { username, password } = Object.fromEntries(formData)
    
    const cookieStore = await cookies()

    const schema = z.object({
        username: z.string().email(),
        password: z.string()
    })

    const result = schema.safeParse({ username, password })

    console.log("hej", result)

    // if (!result.success) return { success: false }

    const response = await fetch ("http://localhost:4000/auth/token", {
		method: "POST",
		headers: {
			"content-type": "application/json",
             },
		body: JSON.stringify({
			username: username,
            password: password
		}),
	})
    // .then(response => console.log(response))
    // .catch(err => console.error(err));

    const userData = await response.json()

    console.log(userData)

    cookieStore.set("fv_token", userData.token) //JasonWebToken
    cookieStore.set("fv_userid", userData.userId) //gemmer id

    return { success: true }

}