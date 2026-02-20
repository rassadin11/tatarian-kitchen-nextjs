import { createIngredient, deleteIngredient, getIngredients } from "@/actions/ingredient";
import { IIngredient } from "@/types/ingredient";
import { create } from "zustand";

interface IngredientState {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;
    loadIngredients: () => Promise<void>;
    addIngredient: (formData: FormData) => Promise<void>;
    removeIngredient: (id: string) => Promise<void>
}

export const useIngredientStore = create<IngredientState>((set) => ({
    ingredients: [],
    isLoading: false,
    error: null,
    loadIngredients: async () => {
        set({ isLoading: true, error: null })

        try {
            const result = await getIngredients()

            if (result.success) {
                set({
                    ingredients: result.ingredients,
                    isLoading: false
                })
            } else {
                set({
                    isLoading: false,
                    error: result.error
                })
            }
        } catch (e) {
            console.log('error: ', e)
            set({ error: "Ошибка при заргрузке ингредиентов", isLoading: false })
        }
    },
    addIngredient: async (formData: FormData) => {
        set({ isLoading: true, error: null })

        try {
            const result = await createIngredient(formData)

            if (result.success) {
                set(state => ({
                    ingredients: [...state.ingredients, result.ingredient],
                    isLoading: false
                }))
            } else {
                set({ error: result.error, isLoading: false })
            }
        } catch (e) {
            console.log('error: ', e)
            set({ error: "Ошибка при создании ингредиентов", isLoading: false })
        }
    },
    removeIngredient: async (id: string) => {
        set({ isLoading: true, error: null })
        try {
            const result = await deleteIngredient(id)

            if (result.success) {
                set(state => ({
                    ingredients: state.ingredients.filter(item => item.id !== id),
                    isLoading: false
                }))
            } else {
                set({ error: result.error, isLoading: false })
            }
        } catch (e) {
            console.log('error: ', e)
            set({ error: "Ошибка при удалении ингредиента", isLoading: false })
        }
    }
}))