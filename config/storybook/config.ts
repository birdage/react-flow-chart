import { configure } from '@storybook/react'
import { resolve } from "path"

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../../stories", true, /\.tsx?$/));
}

configure(loadStories, module);