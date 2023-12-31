const token = '6358add184f3a635a82c88476c0e733c810bfe1db9a6c72c'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-phonebook-h8ok.onrender.com/api/contacts`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    }, 

    create: async(data: any = {}) => {
        const response = await fetch(`https://flask-phonebook-h8ok.onrender.com/api/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://flask-phonebook-h8ok.onrender.com/api/contacts/${id}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to ')
        };
        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://flask-phonebook-h8ok.onrender.com/api/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to Delete contact')
        }
        return await response.json()
    }
}

