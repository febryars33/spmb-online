<template>
    <template v-if="relative && relativeType">
        {{
            relativeRender().charAt(0).toUpperCase() + relativeRender().slice(1)
        }}
    </template>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';

defineOptions({
    name: 'DayJS',
})

const props = defineProps<{
    date: string
    format?: string
    relative?: boolean
    relativeType?: 'fromNow' | 'from' | 'toNow' | 'to'
    from?: string
    to?: string
}>();

dayjs.locale('id');

if (props.relative) {
    dayjs.extend(relativeTime)
}

const relativeRender = () => {
    switch (props.relativeType) {
        case 'fromNow':
            return dayjs(props.date).fromNow();
            break;
        case 'from':
            return dayjs(props.date).from(props.from);
            break;
        case 'toNow':
            return dayjs(props.date).toNow();
            break;
        case 'to':
            return dayjs(props.date).to(props.to);
            break;
        default:
            return dayjs(props.date).format(props.format);
            break;
    }
}
</script>
