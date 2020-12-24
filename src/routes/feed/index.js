import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks' 
import { DateTime } from 'luxon'
import Stub from '../../components/stub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style'

// default to 8 null articles for placeholder rendering
const articlesPlaceholder = [{},{},{},{},{},{},{},{}]

const Feed = () => {

	const [articles, setArticles] = useState(articlesPlaceholder)

	useEffect(() => {
		setTimeout(() => {
			// TODO: replace this url with the api/feed endpoint
			fetch('/api/feed', {
			// fetch('/assets/nyt.json', {
				credentials: 'include'
			})
			.then(function(resp) {
				return resp.json()
			})
			.then(function(data) {
				setArticles(data.articles)
			})
		}, 350)
	}, [])

	return (
		<div class={style.feed}>
			<h1>What's News</h1>
			{articles.length > 0 && articles.slice(0,21).map((article) => {
				if(article.date) {
					article.date = DateTime.fromISO(article.date).toSeconds();
				}
				return <Stub {...article}/>
			})}
			<div class={style.endcap}>
				<p>Thats it for now.<br/>How about the weather?</p>
				<p><FontAwesomeIcon icon="cloud-sun"/><sup>40&#8457;</sup>/<sub>24&#8457;</sub></p>
			</div>
		</div>
	)
}

export default Feed
