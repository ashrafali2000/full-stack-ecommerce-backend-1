const path = require("path")
const fs = require("fs");
const express = require("express");
const {uid} = require("uid/single")
const productJsonFile = path.join(process.cwd(),"db", "products.json");



const readData = () => {
    return new Promise( (resolve, reject) => {
        fs.readFile(productJsonFile, "utf8", (err, productData) => {
            if(err){
              return  reject(err)
            }
            resolve(JSON.parse(productData.toString()))
        })

    })
    }

const addProduct = async (data) => {
    try{
            let {products} = await readData();
            const productId = uid(16)
            products.push({pId: productId , ...data})
            let newData = JSON.stringify({products})
            fs.writeFile(productJsonFile, newData, (err) => {
                if(err) {
                    console.log(users);
                }
            })
    }catch(err){
        throw err;
    }
}


    const findProduct = async (productName) => {
     try{
     const  { products } = await readData()
     const newProducts = products.filter(p => p.title.toLowerCase().includes(productName))
     return newProducts;
     }catch(err){
       throw err;
     }
    }

module.exports = {addProduct, findProduct }