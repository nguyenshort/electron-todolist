import {AnimeInstance} from "../../types/anime";
import {inject} from "vue";

export const useAnime = (): AnimeInstance => {
    return inject('anime')!;
}
