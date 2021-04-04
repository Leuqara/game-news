const base_url = "https://api.rawg.io/api/";


const today = new Date().toISOString().slice(0, 10);
const prevYear = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().slice(0, 10);
const nextYear =  new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 10);

const popular_games = `games?dates=${prevYear},${today}&ordering=-rating&page_size=12`;
const upcoming_games = `games?dates=${today},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?dates=${prevYear},${today}&ordering=-released&page_size=12`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upComingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;


//Game details
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots`;