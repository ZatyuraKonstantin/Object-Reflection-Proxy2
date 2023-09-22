// TODO: write your code here
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));

export default function chooseAttack(obj) {
    const result = [];
  
    obj.special.forEach((item) => {
      if (!item.description) {
        result.push({
          id: item.id,
          name: item.name,
          icon: item.icon,
          description: 'Описание недоступно',
        });
      } else (result.push(item));
    });
    console.log(result);
    return result;
  }