async function checkType(type){
    if (!['INCOME', 'OUTCOME'].includes(type)) {
      return null
    }
}

export { checkType }