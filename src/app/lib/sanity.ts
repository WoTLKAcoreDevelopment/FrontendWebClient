import {createClient} from 'next-sanity'

export const client = createClient({
    apiVersion:'2024-03-19',
    dataset:'production',
    projectId:'rp593nas',
    useCdn:false,
})