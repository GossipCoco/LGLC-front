<template>
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 card-global">
        <div class="card background-lineart border-none fiction-card scheduler">
            <TitleHeaderDashboard v-bind:title="'évènements'"/>
            <div class="card-body scheduler-container">
                <FullCalendar :options='calendarOptions'>
                    <template v-slot:eventContent='arg'>
                        <i>{{ arg.event.title }}</i>
                        <b>{{ arg.event.text }}</b>
                    </template>
                </FullCalendar>
            </div>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import frLocale from '@fullcalendar/core/locales/fr'
import EventService from '../../../services/EventService'

import TitleHeaderDashboard from '../../Components/SpecificComponent/TitleHeaderDashboard.vue';
export default {
    name: 'Scheduler',
    components: {
        TitleHeaderDashboard,
        FullCalendar
    },
    data() {
        return {
            event: {},
            nav: {
                current: 0,
                pages: 0,
                step:20,
            },
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                locale: frLocale,
                weekends: true,
                events: [], // alternatively, use the `events` setting to fetch from a feed
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                select: this.handleDateSelect,
                eventClick: this.handleEventClick,
                eventsSet: this.handleEvents
            }
        }
    },
    created() {
        this.GetAllEvents(this.nav)
    },
    methods: {
        handleDateClick(info) {
            alert('Clicked on: ' + info.dateStr);
        },
        GetAllEvents(nav) {
            EventService.GetAllEvents(nav)
                .then((response) => {
                    // Assuming response.data contains the events array
                    this.calendarOptions.events = response.data.ob.map(event => {
                        // console.log(event)
                        return {
                            title: event.Title,
                            text: event.Description,// Replace with the actual property names from your events
                            start: event.StartDate, // Replace with the actual property names from your events
                            end: event.EndDate // If you have an end date
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>