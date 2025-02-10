/**
 * 
 * @param {*} carta 
 * @returns { HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML=(carta)=>{
    if(!carta) throw new Error('La carta es un argumento obloigatorio');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}