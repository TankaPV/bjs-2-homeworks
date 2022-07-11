function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    const objectInCache = cache.find((item) => item.hash === hash); 

    if (objectInCache) {
        console.log('Из кэша:' + objectInCache.value);
        return 'Из кэша: ' + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash:hash, value: result});

    console.log('Вычисляем: ' + result);
       
    if (cache.length > 5) {
        cache.shift();
    }

    return 'Вычисляем: ' + result;  

  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let isThrottled = false;
  let timeout;
  
  return function(...args) {

    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      isThrottled = false;
      func.apply(this, args);
    }, ms);

    if (isThrottled) {
      console.log('Сигнал проигнорирован');
      return;
    }
    
    func.apply(this, args);
    isThrottled = true;     
    
  }
}

function debounceDecorator2(func, ms) {
  let isThrottled = false;
  let timeout;

  wrapper.count = 0;

    function wrapper(...args) {

      wrapper.count += 1;
      console.log(wrapper.count);

      clearTimeout(timeout);
    
      timeout = setTimeout(() => {
        isThrottled = false;
        func.apply(this, args);
      }, ms);


      if (isThrottled) {
        console.log('Сигнал проигнорирован');
        return;
      }

      func.apply(this, args);
      isThrottled = true; 
    
    }

    return wrapper;
}