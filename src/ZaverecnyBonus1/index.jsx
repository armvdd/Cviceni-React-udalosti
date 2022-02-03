import React from 'react'

// Zadání 1:
// Pomocí události `change` a vlastnosti `event.target.value` vypisuj do konzole,
// co postupně uživatel do inputu píše ve formátu:
// console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).

// Zadání 2:
// Pokud uživatel z textového políčka vše smaže,
// vypiš „Uživatel nenapsal nic“.

const ZaverecnyBonus1 = () => {
	const handleChange = (e) => {
		{e.target.value ? console.log(`Uživatel napsal ${e.target.value}`) : console.log(`Uživatel všechno smazal`)}
		
	}
	return <input onChange={handleChange}/>
}

export default ZaverecnyBonus1;