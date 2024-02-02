'use server';

import ApiClient from "./ApiRender";

const token = 'YOUR_API_TOKEN'

async function getData() {
	// Requests data from the api 
	const res = await fetch(
		'https://aio.server9.nelios.com/',
		{
		headers:
		{
			Authorization: `Bearer ${token}`
		}
	});
 
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}


export default async function ApiData() {
	// Returns json data from api 
	const data = await getData()
	const jsonString = JSON.stringify(data, null, 2);
	return <div><ApiClient data={data} /></div>
}
