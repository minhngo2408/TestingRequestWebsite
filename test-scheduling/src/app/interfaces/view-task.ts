export interface ViewTask {
  _id: String,
  tool: String,
  resource: String,
  duration: String,
  testContact: String,
  priority: String,
  companyPSL: String,
  group: String,
  PSLParticipation: Boolean,
  testDescription: String,
  startdate: Date,
  enddate: Date,
  selectedStartTime: Array<String>,
  createdAt: Date,
  //someid: String,
  WorkRequestId: String,
  status: String,
  id: String
}
