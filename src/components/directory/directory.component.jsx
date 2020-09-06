import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            section:
            [
                {
                  title: 'Rol',
                  imageUrl: 'https://citalin.com/womama/img/rol.jpg',                  
                  id: 1,
                  linkUrl: 'shop/roles'
                },
                {
                  title: 'Corazon',
                  imageUrl: 'https://citalin.com/womama/img/corazon_deco.jpg',
                  id: 2,
                  linkUrl: 'shop/corazon'
                },
                {
                  title: 'Rellenas',
                  imageUrl: 'https://citalin.com/womama/img/rellena_deco.jpg',
                  id: 3,
                  linkUrl: 'shop/rellenas'
                },
                {
                  title: 'Donas',
                  imageUrl: 'https://citalin.com/womama/img/dona.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/donas'                  
                },
                {
                  title: 'Rol Decorado',
                  imageUrl: 'https://citalin.com/womama/img/rol_deco.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/rol-deco'
                }
              ]
        }
    }

    render() {
        return (
            <div className = 'directory-menu'>
                {this.state.section.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl= {imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default Directory;