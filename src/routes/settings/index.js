import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style';
import { useState } from 'preact/hooks';

const Settings = (props) => {

  const [expanded, setExpanded] = useState(false)

  const previewImage = (e) => {
		var file = e.target.files;
		if (file.length > 0) {
			var fileReader = new FileReader()

			fileReader.onload = (event) => {
				props.setWallpaper(event.target.result)
			}

			fileReader.readAsDataURL(file[0])
    }
    
	}

	return (
		<div class={style.settings}>
			<h1>Settings</h1>
      <ul>
        <li className={expanded?style.expanded:''} onClick={()=>{setExpanded((prevExpanded) => !prevExpanded)}}>
          <span className='fa-layers fa-fw'>
            {/* <FontAwesomeIcon icon='square' transform='grow-8' color='#06f'/> */}
            <FontAwesomeIcon icon='mobile'/>
            <FontAwesomeIcon icon='image' color='#09f' transform='right-0.5 up-1.5 shrink-6 rotate-90'/>
          </span>
          Wallpaper
          <div className={style.itemCompartment}>
            <ul>
              <li>
                <label for='wallpaper'>Choose a new wallpaper</label>
                <input type='file' id='wallpaper' accept='image/*' onChange={previewImage}/>
              </li>
            </ul>
          </div>
        </li>
      </ul>
		</div>
	);
}

export default Settings;