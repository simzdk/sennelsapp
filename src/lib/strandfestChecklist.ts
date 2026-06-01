export const checklistStorageKey = 'malle-strandfest-2026-husk';

type ChecklistAction = {
	label: string;
	value?: string;
	href?: string;
};

type ChecklistItem = {
	id: string;
	title: string;
	detail: string;
	due: string;
	deadline?: string;
	actions?: ChecklistAction[];
};

export const checklistItems: ChecklistItem[] = [
	{
		id: 'child-party-payment',
		title: 'Tilmeld børnefest',
		detail: 'MobilePay 30 kr. til 5930RK. Husk barnets navn og klasse.',
		due: 'Senest 14/6',
		deadline: '2026-06-14',
		actions: [
			{ label: 'Kopiér MobilePay', value: '5930RK' }
		]
	},
	{
		id: 'buffet-brunch-registration',
		title: 'Tilmeld aftenspisning eller brunch',
		detail: 'Kontakt Helle Kilsgaard: 61 74 45 12 eller fam.kilsgaard@gmail.com.',
		due: 'Anbefales før festen',
		actions: [
			{ label: 'Ring til Helle', href: 'tel:+4561744512' },
			{ label: 'Kopiér telefon', value: '61 74 45 12' },
			{ label: 'Send mail', href: 'mailto:fam.kilsgaard@gmail.com' },
			{ label: 'Kopiér mail', value: 'fam.kilsgaard@gmail.com' }
		]
	},
	{
		id: 'pig-roast-payment',
		title: 'Betal grisefest',
		detail: 'MobilePay 250 kr. pr. person til 666235.',
		due: 'Ved tilmelding',
		actions: [
			{ label: 'Åbn MobilePay', href: 'mobilepay://send?phone=666235' }
		]
	},
	{
		id: 'pig-roast-written-registration',
		title: 'Skriftlig tilmelding til grisefest',
		detail: 'Betaling via MobilePay er ikke nok. Husk også skriftlig tilmelding til Helle.',
		due: 'Ved tilmelding'
	},
	{
		id: 'brunch-ticket',
		title: 'Køb brunchbilletter ved indgangen',
		detail: 'Brunch koster 130 kr. Børn under 8 år halv pris. Tilmelding tilrådes.',
		due: 'Søndag 21/6'
	}
];
