import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { TryMyAgentComponent } from './try-my-agent/try-my-agent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { BusinessgoalsComponent } from './businessgoals/businessgoals.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddQuestionFormComponent } from './add-question-form/add-question-form.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';
import { QualifyLeadComponent } from './qualify-lead/qualify-lead.component';
import { TrainingMaterialsComponent } from './training-materials/training-materials.component';
import { CapturedContactsComponent } from './captured-contacts/captured-contacts.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { HelpComponent } from './help/help.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AppearComponent } from './appear/appear.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup-login', pathMatch: 'full' },
  { path: 'signup-login', component: SignupLoginComponent },
  { path: 'create-agent', component: CreateAgentComponent },
  { path: 'try-my-agent', component: TryMyAgentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appearance', component: AppearanceComponent },
  {path: 'businessgoals', component:BusinessgoalsComponent},
  { path: 'question-answer', component: QuestionAnswerComponent },
  { path: 'advanced', component: AdvancedComponent },
  { path: 'add-question-form', component: AddQuestionFormComponent },
  {path: 'manage-team', component:ManageTeamComponent},
  {path: 'add-member-form', component:AddMemberFormComponent},
  {path: 'qualify-lead', component:QualifyLeadComponent},
  {path:'traing-materials', component: TrainingMaterialsComponent},
  {path:'captured-contacts', component: CapturedContactsComponent},
  {path:'conversations', component: ConversationsComponent},
  {path:'help', component: HelpComponent},
  {path:'integrations', component: IntegrationsComponent},
  {path:'upgrade', component: UpgradeComponent},
  {path:'user-settings', component: UserSettingsComponent},
  {path:'appear', component:AppearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





