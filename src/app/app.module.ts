import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { TryMyAgentComponent } from './try-my-agent/try-my-agent.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
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
// import { HelpCenterComponent } from './help-center/help-center.component';
import { HelpComponent } from './help/help.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AppearComponent } from './appear/appear.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAgentComponent,
    TryMyAgentComponent,
    SidebarComponent,
    AppearanceComponent,
    DashboardComponent,
    SignupLoginComponent,
    BusinessgoalsComponent,
    QuestionAnswerComponent,
    AdvancedComponent,
    AddQuestionFormComponent,
    ManageTeamComponent,
    AddMemberFormComponent,
    QualifyLeadComponent,
    TrainingMaterialsComponent,
    CapturedContactsComponent,
    ConversationsComponent,
    // HelpCenterComponent,
    // HelpcenterComponent,
    HelpComponent,
    IntegrationsComponent,
    UpgradeComponent,
    UserSettingsComponent,
    AppearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

