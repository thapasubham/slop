import { setContext, getContext } from 'svelte';

class GameState {
	clickedProjects = $state(new Set<string>());
	gameActive = $state(false);

	trackProject(id: string) {
		this.clickedProjects.add(id);
		if (this.clickedProjects.size >= 3 && !this.gameActive) {
			this.gameActive = true;
		}
	}

	exitGame() {
		this.gameActive = false;
		this.clickedProjects.clear();
	}
}

const GAME_KEY = Symbol('GAME_STATE');

export function initGameState() {
	return setContext(GAME_KEY, new GameState());
}

export function useGameState() {
	return getContext<GameState>(GAME_KEY);
}
