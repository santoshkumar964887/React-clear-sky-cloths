import React,{Component} from 'react';
import './Dectory.Style.scss';
import {connect} from 'react-redux';
import MenuItem from '../MenuItem';
import {selectDirectorySection} from '../../Redux/Directory/Directory.selecter';
import {createStructuredSelector} from 'reselect';

const Dirctory= ({sections}) =>(
   
    <div className='directory'>{
      sections.map(({title,imageUrl,size, id,linkUrl})=><MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>)
      
      }
    </div>

  );
  const mapStateToProps= createStructuredSelector({
    sections: selectDirectorySection
  });

export default connect(mapStateToProps) (Dirctory);
