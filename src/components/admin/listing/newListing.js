import React from 'react'
import { ArrowDown } from '../../../icon'

export default function NewListing() {
  return (
    <div className='bg-white p-5 rounded'>
        <div>
            <h1>List new products</h1>
            <p className='text-black-50'>upload at least 4 images</p>
        </div>
        <div className='row'>
            <div className='col-sm-6 col-md-3 pb-3'>
                <div className='card' style={{height:"150px",background:"#EEE"}}>
                    <input className='form-control'  type="file" name="filename"/>
                </div>
            </div>
            <div className='col-sm-6 col-md-3 pb-3'>
                <div className='card' style={{height:"150px",background:"#EEE"}}>
                    <input className='form-control'  type="file" name="filename"/>
                </div>
            </div>
            <div className='col-sm-6 col-md-3 pb-3'>
                <div className='card' style={{height:"150px",background:"#EEE"}}>
                    <input className='form-control'  type="file" name="filename"/>
                </div>
            </div>
            <div className='col-sm-6 col-md-3 pb-3'>
                <div className='card' style={{height:"150px",background:"#EEE"}}>
                    <input className='form-control'  type="file" name="filename"/>
                </div>
            </div> 
        </div>
        <div className='col-10'>
            <form className='pt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <label className='pb-2'>Product title</label><br/>
                        <input type='text' className='form-control' placeholder='should not be more than 250 characters' style={{height:"50px",background:"#EEE"}}/>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                    <label for="exampleDataList" className="form-label">Choose category</label>
                    <input type='text' className='form-control border-0' list="datalistOptions" id="exampleDataList" style={{background:"#EEEEEE", height:"50px"}}  placeholder='Refined oil'/>
                        <div style={{marginLeft:"90%", marginTop:"-10%"}}>
                            <ArrowDown  />
                        </div>
                    </div>
                    <datalist id="datalistOptions">
                        <option />
                        <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                    </datalist>   
                    
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <label className='pt-3 pb-2'>Description</label><br/>
                        <input type='text' className='form-control' placeholder='should not be more than 1450 characters' style={{height:"80px",background:"#EEE"}}/>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <label className='pt-3 pb-2'>Subtitle</label><br/>
                        <input type='text' className='form-control' placeholder='should not be more than 450 characters' style={{height:"80px",background:"#EEE"}}/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
