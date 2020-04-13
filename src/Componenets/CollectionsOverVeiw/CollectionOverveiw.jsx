import React from 'react';
import './CollectionOverVeiw.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Preview from '../PreviewCollection/Preview';
import {SelectCollectionsPreview} from '../../Redux/shop/ShopSelector';
const CollectionOverVeiw=({collections})=>(
    <div className="CollectionOverVeiw">{
          collections.map(collections=>(

<Preview key={collections.id} title={collections.title} item={collections.items}/>
))
}


    </div>

);
const mapStateToProps=createStructuredSelector(
    {
      collections : SelectCollectionsPreview
    }
);
export default connect(mapStateToProps)(CollectionOverVeiw);