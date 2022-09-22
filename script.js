paoJson.map((item, index) => {

    //console.log(item)

    let paoItem = document.querySelector('.models .pao-item').cloneNode(true)

   // console.log(paesItem)

   document.querySelector('.pao-area').append(paoItem)

   paoItem.querySelector('.pao-item--img img').src = item.img
   paoItem.querySelector('.pao-item--price').innerHTML = 'R$ ${item.price.toFixed(2)}'
   paoItem.querySelector('.pao-item--name').innerHTML = item.name
   paoItem.querySelector('.pao-item--desc').innerHTML = item.description

})