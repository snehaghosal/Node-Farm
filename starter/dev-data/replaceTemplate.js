module.exports=(temp,product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%productprice%}/g, product.price)
    output = output.replace(/{%PRODUCTQTY%}/g, product.quantity)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%productcountry%}/g, product.from)
    output = output.replace(/{%productnutrient%}/g, product.nutrients)
    output = output.replace(/{%productdesc%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)

    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}