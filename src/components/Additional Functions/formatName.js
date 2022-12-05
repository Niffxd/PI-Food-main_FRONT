export default function formatName ( dietName ) {
  if(dietName === 'paleolithic') return 'Paleo'
  const strDiet = dietName.replace('lacto ovo', '').trim()
  return strDiet.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ')
}