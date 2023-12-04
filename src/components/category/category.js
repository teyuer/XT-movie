import React from 'react';
import {Stack} from "@mui/material";
import {colors} from "../../constans/colors";
import {category} from "../../constans";

const Category = ({selectCategory, selectCategoryHandler}) => {

    return (
        <Stack direction={'row'} sx={{overflow: 'scroll'}}>
            {category.map(item => (
                <button key={item.name} className='category-btn' style={{
                    borderRadius: '0',
                    background: item.name === selectCategory && colors.secondary,
                    color: item.name === selectCategory && `#fff`

                }}
                        onClick={() => selectCategoryHandler(item.name)}
                >

                    <span style={{
                        color: item.name === selectCategory ? `#fff` : colors.primary,


                        marginRight: '15px'
                    }}>{item.icon} </span>
                    <span style={{opacity: '1'}}>{item.name} </span>
                </button>
            ))}
        </Stack>
    );
}

export default Category;