import { StyleSheet } from 'react-native'
import {colors} from './colors'

export const lab = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },

    increment: {
        fontSize: 32,
        fontWeight: '800', //bold is not supported on android
        color: colors.alpha,
    },

    title: {
        fontSize: 22,
        letterSpacing: 0.5,
    },

    rating: {
        marginTop: 8,
    },

    description: {
        marginVertical: 8,
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.6,
    },
})