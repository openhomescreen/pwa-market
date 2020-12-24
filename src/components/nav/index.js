import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';

const Nav = () => (
	<nav class={style.nav}>
		<Link activeClassName={style.active} href="/preferences"><FontAwesomeIcon icon="cogs"/></Link>
		<Link activeClassName={style.active} href="/"><FontAwesomeIcon icon={['far', 'newspaper']}/></Link>
		<Link activeClassName={style.active} href="/reading-list"><FontAwesomeIcon icon="glasses"/></Link>
	</nav>
);

export default Nav;
