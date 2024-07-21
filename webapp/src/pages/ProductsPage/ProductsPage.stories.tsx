import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { INPIPELINE_URL, UPDATE_STATUS_URL } from "../ApiHelper";

export default {
    title: 'Products Page',
    component: ProductsPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                      "ProductID": 1,
                      "ProductName": "Hat",
                      "ProductPhotoURL": "t",
                      "ProductStatus": "Active",
                    },
                    {
                      "ProductID": 2,
                      "ProductName": "Shoes",
                      "ProductPhotoURL": "t",
                      "ProductStatus": "Active",
                    },
                    {
                      "ProductID": 3,
                      "ProductName": "Pants",
                      "ProductPhotoURL": "t",
                      "ProductStatus": "Active",
                    },
                ],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
        {
            url: UPDATE_STATUS_URL,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};
