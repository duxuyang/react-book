import React, {
	Component
} from 'react'
import axios from 'axios'
import qs from 'qs'


function http(api, data) {
	let param = qs.stringify(data)
	return new Promise((resolve, reject) => {
		axios.post("http://localhost:5500" + api, param).then((res) => {
			resolve(res.data)
		})
	})
}
export default http;