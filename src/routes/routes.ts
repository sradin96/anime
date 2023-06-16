import AnimeDetail from "../components/pages/AnimeDetail/AnimeDetail";
import AnimeList from "../components/pages/AnimeList/AnimeList";
import Home from "../components/pages/Home/Home";
import MangaDetail from "../components/pages/MangaDetail/MangaDetail";
import MangaList from "../components/pages/MangaList/MangaList";
import { Routes } from "../types/types";

export const routes: Routes[] = [
    {
        path: "/",
        exact: true,
        component: Home,
        index: 1,
    },
    {
        path: "/home",
        exact: true,
        component: Home,
        index: 2,
    },
    {
        path: '/anime/:id',
        component: AnimeDetail,
        index: 3,
    },
    {
        path: '/manga/:id',
        component: MangaDetail,
        index: 4,
    },
    {
        path: '/animes/',
        component: AnimeList,
        index: 4,
    },
    {
        path: '/mangas/',
        component: MangaList,
        index: 4,
    }
  ];