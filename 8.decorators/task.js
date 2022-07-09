function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    const objectInCache = cache.find((item) => {
      if (item.hash === hash) {
        return item;
      }
    }); 

    if (objectInCache) {
        console.log('Из кэша:' + objectInCache.value);
        return 'Из кэша: ' + objectInCache.value;
    }

    if (!objectInCache) {
      let result = func(...args);
      cache.push({hash:hash, value: result});
       
      if (cache.length > 5) {
          cache.shift();
      }   

      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result;  

    }
    
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
  
  return function(...args) {
    
    if (isThrottled) {
      console.log('Сигнал проигнорирован')
      return;
    }

    func.apply(this, args);
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
      func.apply(this, args);
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let isThrottled = false;

  wrapper.count = 0;

      function wrapper(...args) {

      wrapper.count += 1;
      console.log(wrapper.count);

      if (isThrottled) {
       console.log('Сигнал проигнорирован')
        return;
      }

      func.apply(this, args);
      isThrottled = true;
      

      setTimeout(() => {
        isThrottled = false;
        func.apply(this, args);
      }, ms);
    }

    return wrapper;
}