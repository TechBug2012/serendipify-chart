//import Chart from 'Chart.js';

var ctx = "prefsChart"
var radial = new Chart(ctx, {
  type: 'radial',
  data: { //get json data
    labels: ["Selling   or   Influencing   Others",
    "Performing   for   or   Working   Directly   with   the Public",
    "Establishing   and   Maintaining   Interpersonal   Relationships",
    "Assisting   and   Caring   for Others",
    "Resolving   Conflicts   and   Negotiating   with   Others",
    "Communicating   with   Persons Outside   Organization",
    "Training   and   Teaching   Others",
    "Thinking   Creatively",
    "Staffing Organizational   Units",
    "Monitoring   and   Controlling   Resources",
    "Judging   the   Qualities   of   Things, Services,   or   People",
    "Guiding,   Directing,   and   Motivating   Subordinates",
    "Developing   Objectives and   Strategies",
    "Communicating   with   Supervisors,   Peers,   or   Subordinates",
    "Developing   and Building   Teams",
    "Scheduling   Work   and   Activities",
    "Coaching   and   Developing Others",
    "Updating   and   Using   Relevant   Knowledge",
    "Estimating   the   Quantifiable Characteristics   of   Products,   Events,   or   Information",
    "Interpreting   the   Meaning   of   Information   for Others",
    "Evaluating   Information   to   Determine   Compliance   with   Standards",
    "Getting Information",
    "Documenting/Recording Information",
    "Inspecting   Equipment,   Structures,   or Material",
    "Interacting   With   Computers",
    "Handling   and   Moving   Objects",
    "Making   Decisions and   Solving   Problems",
    "Repairing   and   Maintaining   Mechanical   Equipment",
    "Repairing   and Maintaining   Electronic   Equipment",
    "Controlling   Machines   and   Processes",
    "Operating   Vehicles, Mechanized   Devices,   or   Equipment",
    "Performing   Administrative   Activities",
    "Performing General   Physical   Activities"],
    datasets: [{
      label: "Importance",
      data: [0,1,2,3,4,5,6,7],
      backgroundColor: [
        'rbga(244,66,66,0.2)', //0
        'rgba(244,125,66,0.2)', //1
        'rgba(244,167,66,0.2)', //2
        'rgba(244,206,66,0.2)', //3
        'rgba(250,255,0,0.2)', //4
        'rgba(161,255,0,0.2)', //5
        'rgba(97,255,0,0.2)', //6
        'rgba(0,255,12,0.2)' //7
      ],
      borderColor: [
        'rbga(244,66,66,1)', //0
        'rgba(244,125,66,1)', //1
        'rgba(244,167,66,1)', //2
        'rgba(244,206,66,1)', //3
        'rgba(250,255,0,1)', //4
        'rgba(161,255,0,1)', //5
        'rgba(97,255,0,1)', //6
        'rgba(0,255,12,1)' //7
      ],
      borderWidth: 1
    }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
});
