import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const CustomTheme: CustomThemeConfig = {
	name: 'custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #b0dfcd
		'--color-primary-50': '243 250 248', // #f3faf8
		'--color-primary-100': '239 249 245', // #eff9f5
		'--color-primary-200': '235 247 243', // #ebf7f3
		'--color-primary-300': '223 242 235', // #dff2eb
		'--color-primary-400': '200 233 220', // #c8e9dc
		'--color-primary-500': '176 223 205', // #b0dfcd
		'--color-primary-600': '158 201 185', // #9ec9b9
		'--color-primary-700': '132 167 154', // #84a79a
		'--color-primary-800': '106 134 123', // #6a867b
		'--color-primary-900': '86 109 100', // #566d64
		// secondary | #bc6234
		'--color-secondary-50': '245 231 225', // #f5e7e1
		'--color-secondary-100': '242 224 214', // #f2e0d6
		'--color-secondary-200': '238 216 204', // #eed8cc
		'--color-secondary-300': '228 192 174', // #e4c0ae
		'--color-secondary-400': '208 145 113', // #d09171
		'--color-secondary-500': '188 98 52', // #bc6234
		'--color-secondary-600': '169 88 47', // #a9582f
		'--color-secondary-700': '141 74 39', // #8d4a27
		'--color-secondary-800': '113 59 31', // #713b1f
		'--color-secondary-900': '92 48 25', // #5c3019
		// tertiary | #3809a0
		'--color-tertiary-50': '225 218 241', // #e1daf1
		'--color-tertiary-100': '215 206 236', // #d7ceec
		'--color-tertiary-200': '205 194 231', // #cdc2e7
		'--color-tertiary-300': '175 157 217', // #af9dd9
		'--color-tertiary-400': '116 83 189', // #7453bd
		'--color-tertiary-500': '56 9 160', // #3809a0
		'--color-tertiary-600': '50 8 144', // #320890
		'--color-tertiary-700': '42 7 120', // #2a0778
		'--color-tertiary-800': '34 5 96', // #220560
		'--color-tertiary-900': '27 4 78', // #1b044e
		// success | #55b715
		'--color-success-50': '230 244 220', // #e6f4dc
		'--color-success-100': '221 241 208', // #ddf1d0
		'--color-success-200': '213 237 197', // #d5edc5
		'--color-success-300': '187 226 161', // #bbe2a1
		'--color-success-400': '136 205 91', // #88cd5b
		'--color-success-500': '85 183 21', // #55b715
		'--color-success-600': '77 165 19', // #4da513
		'--color-success-700': '64 137 16', // #408910
		'--color-success-800': '51 110 13', // #336e0d
		'--color-success-900': '42 90 10', // #2a5a0a
		// warning | #a8c93c
		'--color-warning-50': '242 247 226', // #f2f7e2
		'--color-warning-100': '238 244 216', // #eef4d8
		'--color-warning-200': '233 242 206', // #e9f2ce
		'--color-warning-300': '220 233 177', // #dce9b1
		'--color-warning-400': '194 217 119', // #c2d977
		'--color-warning-500': '168 201 60', // #a8c93c
		'--color-warning-600': '151 181 54', // #97b536
		'--color-warning-700': '126 151 45', // #7e972d
		'--color-warning-800': '101 121 36', // #657924
		'--color-warning-900': '82 98 29', // #52621d
		// error | #e910e1
		'--color-error-50': '252 219 251', // #fcdbfb
		'--color-error-100': '251 207 249', // #fbcff9
		'--color-error-200': '250 195 248', // #fac3f8
		'--color-error-300': '246 159 243', // #f69ff3
		'--color-error-400': '240 88 234', // #f058ea
		'--color-error-500': '233 16 225', // #e910e1
		'--color-error-600': '210 14 203', // #d20ecb
		'--color-error-700': '175 12 169', // #af0ca9
		'--color-error-800': '140 10 135', // #8c0a87
		'--color-error-900': '114 8 110', // #72086e
		// surface | #476273
		'--color-surface-50': '227 231 234', // #e3e7ea
		'--color-surface-100': '218 224 227', // #dae0e3
		'--color-surface-200': '209 216 220', // #d1d8dc
		'--color-surface-300': '181 192 199', // #b5c0c7
		'--color-surface-400': '126 145 157', // #7e919d
		'--color-surface-500': '71 98 115', // #476273
		'--color-surface-600': '64 88 104', // #405868
		'--color-surface-700': '53 74 86', // #354a56
		'--color-surface-800': '43 59 69', // #2b3b45
		'--color-surface-900': '35 48 56' // #233038
	}
};
